#!/bin/bash
#
cd ../app-layout
git checkout master
git pull
cd -

vulcanize --inline-css --inline-scripts ../app-layout/patterns/expand-card/index.html > patterns/expand-card/index.html
vulcanize --inline-css --inline-scripts ../app-layout/patterns/transform-navigation/index.html > patterns/transform-navigation/index.html

vulcanize --inline-css --inline-scripts ../app-layout/templates/publishing/index.html > templates/publishing/index.html
vulcanize --inline-css --inline-scripts ../app-layout/templates/pesto/index.html > templates/pesto/index.html
vulcanize --inline-css --inline-scripts ../app-layout/templates/shrine/index.html > templates/shrine/index.html

vulcanize --inline-css --inline-scripts ../app-layout/docs.html > docs.html
vulcanize --inline-css --inline-scripts ../app-layout/index.html > index.html

cd ../app-layout
git checkout sw
git pull
cd -

vulcanize --inline-css --inline-scripts ../app-layout/templates/pesto/index.html > templates-sw/pesto/index.html
