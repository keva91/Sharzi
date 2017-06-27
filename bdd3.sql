-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: jb_projet2
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enseignant` (
  `idEns` int(11) NOT NULL AUTO_INCREMENT,
  `nomEns` varchar(50) NOT NULL,
  `prenomEns` varchar(50) NOT NULL,
  `imageAdrEns` varchar(100) DEFAULT NULL,
  `loginEns` int(11) NOT NULL,
  PRIMARY KEY (`idEns`),
  KEY `loginEns` (`loginEns`),
  CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`loginEns`) REFERENCES `identifiant` (`idIde`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enseignant`
--

LOCK TABLES `enseignant` WRITE;
/*!40000 ALTER TABLE `enseignant` DISABLE KEYS */;
INSERT INTO `enseignant` VALUES (1,'AAA','aaa',NULL,1),(2,'BBB','bbb',NULL,2),(3,'CCC','ccc',NULL,3);
/*!40000 ALTER TABLE `enseignant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etudiant` (
  `idEtu` int(11) NOT NULL AUTO_INCREMENT,
  `nomEtu` varchar(50) NOT NULL,
  `prenomEtu` varchar(50) NOT NULL,
  `idGroupeEtu` int(11) NOT NULL,
  `imageAdrEtu` varchar(100) DEFAULT NULL,
  `loginEtu` int(11) NOT NULL,
  PRIMARY KEY (`idEtu`),
  KEY `idGroupeEtu` (`idGroupeEtu`),
  KEY `loginEtu` (`loginEtu`),
  CONSTRAINT `etudiant_ibfk_1` FOREIGN KEY (`idGroupeEtu`) REFERENCES `groupe` (`idG`),
  CONSTRAINT `etudiant_ibfk_2` FOREIGN KEY (`loginEtu`) REFERENCES `identifiant` (`idIde`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etudiant`
--

LOCK TABLES `etudiant` WRITE;
/*!40000 ALTER TABLE `etudiant` DISABLE KEYS */;
INSERT INTO `etudiant` VALUES (1,'AAA','aaa',1,NULL,4),(2,'BBB','bbb',6,NULL,5),(3,'Verneyre','Sebastien',10,NULL,6),(4,'Peres','Guillaume',10,NULL,7),(5,'Attafi','Adam',10,NULL,8),(6,'Garapati','Vivek',11,NULL,9),(7,'Valbon','Kevin',11,NULL,10),(8,'De Martino','Nicolas',11,NULL,11);
/*!40000 ALTER TABLE `etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groupe` (
  `idG` int(11) NOT NULL AUTO_INCREMENT,
  `nomG` varchar(50) NOT NULL,
  `nbIntervenantG` int(11) NOT NULL,
  `idProjetG` int(11) NOT NULL,
  PRIMARY KEY (`idG`),
  KEY `idProjetG` (`idProjetG`),
  CONSTRAINT `groupe_ibfk_1` FOREIGN KEY (`idProjetG`) REFERENCES `projet` (`idP`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupe`
--

LOCK TABLES `groupe` WRITE;
/*!40000 ALTER TABLE `groupe` DISABLE KEYS */;
INSERT INTO `groupe` VALUES (1,'Groupe1',3,1),(2,'Groupe2',2,2),(3,'Groupe3',2,2),(4,'Groupe4',4,3),(5,'Groupe5',2,1),(6,'Groupe6',5,4),(10,'Groupe Strawpoll',3,23),(11,'Groupe Sharzi',3,22);
/*!40000 ALTER TABLE `groupe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identifiant`
--

DROP TABLE IF EXISTS `identifiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identifiant` (
  `idIde` int(11) NOT NULL AUTO_INCREMENT,
  `loginIde` varchar(50) NOT NULL,
  `mdpIde` varchar(50) NOT NULL,
  PRIMARY KEY (`idIde`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identifiant`
--

LOCK TABLES `identifiant` WRITE;
/*!40000 ALTER TABLE `identifiant` DISABLE KEYS */;
INSERT INTO `identifiant` VALUES (1,'Enseignant1','qwerty1'),(2,'Enseignant2','qwerty2'),(3,'Enseignant3','qwerty3'),(4,'Etudiant1','azerty1'),(5,'Etudiant2','azerty2'),(6,'Etudiant3','azerty3'),(7,'Etudiant4','azerty4'),(8,'Etudiant5','azerty5'),(9,'Etudiant6','azerty6'),(10,'Etudiant7','azerty7'),(11,'Etudiant8','azerty8');
/*!40000 ALTER TABLE `identifiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jalon`
--

DROP TABLE IF EXISTS `jalon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jalon` (
  `idJ` int(11) NOT NULL AUTO_INCREMENT,
  `nomJ` varchar(50) NOT NULL,
  `descrJ` text,
  `date_debutJ` date NOT NULL,
  `date_finJ` date NOT NULL,
  PRIMARY KEY (`idJ`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jalon`
--

LOCK TABLES `jalon` WRITE;
/*!40000 ALTER TABLE `jalon` DISABLE KEYS */;
INSERT INTO `jalon` VALUES (1,'J1','desc jalon 1','2017-01-01','2017-01-03'),(26,'Jalon  Use Case','Rapport à rendre sur les cas d\'utilisation de votre projet','2017-06-27','2017-05-30'),(27,'Jalon Diagramme de classe','Rapport à rendre sur le diagramme de classe de votre projet','2017-06-27','2017-06-09'),(28,'Jalon Diagramme de sequence','Rapport concernant le diagramme de sequence','2017-06-27','2017-06-18'),(29,'Presentation Final','Presentation final du projet','2017-06-27','2017-06-27'),(30,'Rattrapage magique','Rattrapage magique','2017-06-27','2017-08-30');
/*!40000 ALTER TABLE `jalon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jalon_projet`
--

DROP TABLE IF EXISTS `jalon_projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jalon_projet` (
  `idJalonJP` int(11) NOT NULL,
  `idProjetJP` int(11) NOT NULL,
  `commentaireJP` text,
  `rapportAdrJP` varchar(100) DEFAULT NULL,
  `NoteJP` float DEFAULT NULL,
  `idEtatJP` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idJalonJP`,`idProjetJP`),
  KEY `idProjetJP` (`idProjetJP`),
  CONSTRAINT `jalon_projet_ibfk_1` FOREIGN KEY (`idJalonJP`) REFERENCES `jalon` (`idJ`),
  CONSTRAINT `jalon_projet_ibfk_2` FOREIGN KEY (`idProjetJP`) REFERENCES `projet` (`idP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jalon_projet`
--

LOCK TABLES `jalon_projet` WRITE;
/*!40000 ALTER TABLE `jalon_projet` DISABLE KEYS */;
INSERT INTO `jalon_projet` VALUES (1,1,NULL,NULL,NULL,'FINI'),(26,22,NULL,NULL,11,'FINI'),(26,23,NULL,NULL,12,'FINI'),(27,22,NULL,NULL,13,'FINI'),(27,23,NULL,NULL,10,'FINI'),(28,22,NULL,NULL,14,'FINI'),(28,23,NULL,NULL,15,'FINI'),(29,22,NULL,NULL,NULL,'EN_COURS'),(29,23,NULL,NULL,NULL,'EN_COURS'),(30,22,NULL,NULL,NULL,'EN_ATTENTE'),(30,23,NULL,NULL,NULL,'EN_ATTENTE');
/*!40000 ALTER TABLE `jalon_projet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projet` (
  `idP` int(11) NOT NULL AUTO_INCREMENT,
  `nomP` varchar(50) NOT NULL,
  `descrP` text,
  `date_finP` date DEFAULT NULL,
  `date_creationP` date DEFAULT NULL,
  `NoteP` float DEFAULT NULL,
  PRIMARY KEY (`idP`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projet`
--

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;
INSERT INTO `projet` VALUES (1,'projet_jb1 ','Application projet 1','2017-04-20','2016-11-13',NULL),(2,'projet_jb2',NULL,'2017-05-14','2017-12-05',NULL),(3,'proj_jh1',NULL,'2017-05-22','2017-12-19',NULL),(4,'proj_jh2',NULL,'2017-05-25','2017-12-11',NULL),(22,'Sharzi','Realisation du projet Sharzi \nApplication de gestion de projet pour enseignant ','2017-06-27','2017-06-26',NULL),(23,'Strawpoll','Strawpoll\nClient pour l\'application du Strawpoll réalisée par Adam Attafi, Guillaume Peres et Sébastien Verneyre.\n\nCe client est développé à l\'aide de la librairie ReactJS développée par Facebook, et s\'appuie sur un environnement NodeJS.','2017-06-27','2017-06-26',NULL),(24,'Blatoph','Application mobile de partage de photo','2017-06-28','2017-06-27',NULL);
/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-27 11:02:35
