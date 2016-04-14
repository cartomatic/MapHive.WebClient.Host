MapHive.WebClient.Host
======================

A host application that is meant to provide unified access point to child apps.
The idea here is to run the child apps in an iframe. A child application MUST be able to run standalone (it takes care of the auth, redirections, etc) and in an iframe (in such case it is controlled through PosMessage / url part polling)
