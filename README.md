dynjs.org
=========

The new website for dynjs.org. You need [Harp](http://harpjs.com) to build it. Once you've got that:

    $ harp server _harp
    
To compile the site to static files for deployment

    $ harp compile ./

To deploy to gh-pages (the staging site).

    $ git push origin gh-pages
