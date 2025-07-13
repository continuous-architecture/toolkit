---
title: "Utiliser nos templates Miro"
meta_title: "Utiliser et partager nos modèles Miro"
description: "Découvrez comment utiliser, modifier et partager les modèles Miro fournis pour les pratiques de Continuous Architecture, comme le Team Topologies ou l’Event Storming, avec un guide pas à pas."
date: 2022-03-05T05:00:00Z
categories: ["miro"]
author: "Olivier Jauze"
tags: []
draft: false
---

* Téléchargez la dernière version du tableau Miro que vous souhaitez utiliser. À ce jour, nous proposons :
  * Modèle Miro des Team Topologies
  * Event storming
* Ouvrez Miro et cliquez sur *Télécharger depuis une sauvegarde* (*Upload from backup*). Cela créera un nouveau tableau intitulé **Restored SOMETHING**
* ![Capture d’écran de la restauration d’un backup Miro](./images/blog/miro/restoring-miro-backup.png)
* Il vous suffit ensuite de renommer le tableau et de commencer à l’utiliser en copiant-collant les différentes formes selon vos besoins.

## Modifier les modèles Miro et les partager

Vous êtes entièrement libre de modifier nos tableaux pour les adapter à votre contexte. Si vous souhaitez partager ces modèles, plusieurs options s’offrent à vous :

* Vous pouvez le partager comme modèle Miro au sein de votre propre organisation.
* Vous pouvez proposer votre modèle sur **Miroverse**, mais il devra être examiné et approuvé.
* Vous pouvez utiliser la fonctionnalité de sauvegarde de Miro : depuis le tableau que vous avez modifié, créez un fichier de sauvegarde au format `.rtb`. C’est la méthode utilisée par Continuous Architecture.

> Remarque : un fichier de sauvegarde `.rtb` est simplement une archive ZIP standard contenant les fichiers JSON de votre tableau.

## Mettre à jour les fichiers dans le dépôt Continuous Architecture

Vous pouvez également contribuer en partageant vos modifications avec la communauté Continuous Architecture. Une fois les modifications effectuées dans Miro, choisissez *Télécharger une sauvegarde du tableau* (*Download board backup*) depuis le menu d’export :

![Capture d’écran de l’export d’un backup Miro](./images/blog/miro/exporting-miro-backup.png)

Placez le fichier dans le dossier `miro` du dépôt. Validez et poussez vos modifications avec Git. Et voilà. Merci !

```bash
git add .
git commit -m "Commentaire sur les modifications apportées"
git push
