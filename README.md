# MapHive.WebClient.Host

A host application that is meant to provide unified access point to child apps.
The idea here is to run the child apps in an iframe. A child application MUST be able to run standalone (it takes care of the auth, redirections, etc) and in an iframe (in such case it is controlled through PostMessage / url part polling).

This example provides:
* an overview of how it communicates with child apps
* how the events can be passed between host and hosted app, and how they can bubble / drill down
* How to enforce plugging in Azzurra theme, through customised AppLauncher.scss

**Note: This is just an app stub!**
