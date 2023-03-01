#!/bin/bash

#prefix="file://wsl.localhost/Debian/home/t4b/work/gsoa/kgi-website-static/kriegsgeschaefte.ch"
prefixBase='http://localhost:8432/'
prefixDE="${prefixBase}kriegsgeschaefte.ch"
prefixFR="${prefixBase}commercedeguerre.ch"
prefixIT="${prefixBase}commercibellici.ch"

git checkout de603820d67d0f9144181f7d6debfc2c2bc766da -- *.ch/

wget -N https://commercedeguerre.ch/wp-includes/css/classic-themes.min.css?ver=1
cp "classic-themes.min.css?ver=1" commercedeguerre.ch/wp-includes/css/

find *.ch -name '*.*\?*' | sort | sed -E 's/(.*)\?(.*)/cp \1?\2 \1/' > tmp.sh
bash tmp.sh


rewrite_lang(){
  prefix=$1
  prefixDE=$2
  prefixFR=$3
  prefixIT=$4
  folder=$5

  abs='-e s|(href\|src)="https?://(www.)?kriegsgeschaefte.ch/|\1="'
  abs+=$prefix/
  abs+='|g'

  root='-e s|(href\|src)="/|\1="'
  root+=$prefix/
  root+='|g'

  urlDE='-e s|https?://kriegsgeschaefte.ch|'
  urlDE+=$prefixDE
  urlDE+='|g'

  urlFR='-e s|https?://commercedeguerre.ch|'
  urlFR+=$prefixFR
  urlFR+='|g'

  urlIT='-e s|https?://commercibellici.ch|'
  urlIT+=$prefixIT
  urlIT+='|g'

  fix1='-e s|et-divi-customizer-global-1671980101565.min.css|et-divi-customizer-global-16035459764941.min.css|g'

  fix2='-e s|/12/et-core-unified-tb-60-tb-141-12-1671980101565.min.css|/1034/et-core-unified-tb-60-tb-141-1034-16056879171024.min.css|g'

  fix3='-e s|/wp-content/uploads/useanyfont/5841graph-ff-condensed.woff|'
  fix3+=$prefix
  fix3+='/wp-content/uploads/useanyfont/5841graph-ff-condensed.woff|g'

  fix4='-e s|et-divi-customizer-global-16667963733711.min.css|et-divi-customizer-global-16052793644564.min.css|g'

  fix5='-e s|/12/et-core-unified-tb-60-tb-141-12-16667963733711.min.css|/855/et-core-unified-tb-60-tb-141-855-16052795077831.min.css|g'

  fix6='-e s|et-divi-customizer-global-16408833227013.min.css|et-divi-customizer-global-16020068515789.min.css|g'

  fix7='-e s|/12/et-core-unified-tb-60-tb-141-12-1640883324672.min.css|/12/et-core-unified-tb-60-tb-141-12-16020068515789.min.css|g'

  grep -rl -e 'href="' -e 'css' -e 'woff' "$folder" | xargs -L 1 sed -i -E $abs $root $urlDE $urlFR $urlIT $fix1 $fix2 $fix3 $fix4 $fix5 $fix6 $fix7
}

rewrite_lang "$prefixDE" "$prefixDE" "$prefixFR" "$prefixIT" kriegsgeschaefte.ch
rewrite_lang "$prefixFR" "$prefixDE" "$prefixFR" "$prefixIT" commercedeguerre.ch
rewrite_lang "$prefixIT" "$prefixDE" "$prefixFR" "$prefixIT" commercibellici.ch