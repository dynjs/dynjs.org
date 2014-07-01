dynjs.org
=========

The website for dynjs.org. You need [Harp](http://harpjs.com) to build it.
If you don't already have harp installed

    $ npm install harp

For iterative development, just run the harp server.

    $ harp server _harp

To compile the site to static files for deployment, from the top level directory:

    $ harp compile _harp www

When changes are pushed to github, the staging website is updated at
http://staging.dynjs.org via a Cloudbees build:
https://projectodd.ci.cloudbees.com/job/dynjs.org-staging/. To publish
changes to the production website, push to github production branch:

    $ git push origin master:production

To generate the release notes pages (e.g. http://dynjs.org/releases/v0_2_2/) you
will also need the `github` npm module.

    $ npm install github

Then just run the `generate-release-data.js` script.

    $ node generate-release-data.js

That is all.
