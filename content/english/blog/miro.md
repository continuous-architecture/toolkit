---
title: "Using our Miro templates"
meta_title: "Using and Sharing Our Miro Templates"
description: "Learn how to use, customize, and contribute Miro templates—like Team Topologies or Event Storming—in your organization or the Continuous Architecture community."
date: 2022-03-05T05:00:00Z
categories: ["miro"]
author: "Olivier Jauze"
tags: []
draft: false
---

* Download the latest release of the miro board you want to use. As of now, we provide:
  * Team Topologies Miro template
  * Event storming
* Open Miro and click on *Upload from backup*. This will create a new board called **Restored SOMETHING**
![Screenshot of Restoring a Miro backup](./images/blog/miro/restoring-miro-backup.png)
* Then simply rename the board and start using it by copy and pasting the different shapes as required

## Making changes to the Miro templates and share it

You are absolutely free to change our board to make it more useful in your context. If you want to share those templates, there are several ways to share templates in Miro

* You can share it as a template in Miro within your own organization
* You can propose your template to Miroverse but it will have to be reviewed and get approval
* Leverage the backup feature from Miro: from the board you've modified, create a backup rtb file. That's the way we're doing it for Continuous Architecture.

Note: An .rtb backup file is simply a standard zip file containing the json files of your board.

## Updating the  files in the Continuous Architecture repository

You may also want to give back these changes to the Continuous Architecture Community. After you have made any necessary changes to the board in Miro, choose *Download board backup* from the export menu:

![Screenshot of Exporting a Miro backup](./images/blog/miro/exporting-miro-backup.png)

Place the file in the miro folder of our repository. Commit and push your changes with Git. You're done. Thank you.

```
git add .
git commit -m "Comment about changes made"
git push
```