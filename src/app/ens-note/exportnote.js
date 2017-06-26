
function export_table_to_excel(id, type) {
var wbout = XLSX.write(XLSX.utils.table_to_book(document.getElementById(id), {sheet:"Export Notes"}), {bookType:type, bookSST:true, type: 'binary'});
var fname = 'ExportNotes_Sharzi.xlsx';
try {
	saveAs(new Blob([s2ab(wbout)]), fname);
} catch(e) { if(typeof console != 'undefined') console.log(e, wbout); }

return wbout;
}

function s2ab(s) {
	var view = new Uint8Array(new ArrayBuffer(s.length));
	for (var i=0; i!=s.length; ++i) { view[i] = s.charCodeAt(i) & 0xFF; }
	return view;
}

var saveAs = (function(view) {
	var doc = view.document
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				get_URL.revokeObjectURL(deletion_queue[i]);
			}
			deletion_queue.length = 0;
		}

		, FileSaver = function(blob, name) {
			var filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_URL
				, target_view
				, get_object_URL = function() {
					var object_URL = get_URL().createObjectURL(blob);
					deletion_queue.push(object_URL);
					return object_URL;
				}

			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			save_link.href = get_object_URL(blob);
			save_link.download = name;
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			save_link.dispatchEvent(event);
			filesaver.readyState = filesaver.DONE;
			filesaver.savedAs = filesaver.SAVEDASBLOB;
			return;
		}
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		};
	return saveAs;
}(
   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
