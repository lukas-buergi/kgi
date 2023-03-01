#!/bin/bash

#prefixBase='http://localhost:8432/'
prefixBase='https://gsoa.ch/wp-content/uploads/archive/'
prefixDE="${prefixBase}kriegsgeschaefte.ch"
prefixFR="${prefixBase}commercedeguerre.ch"
prefixIT="${prefixBase}commercibellici.ch"

git checkout de603820d67d0f9144181f7d6debfc2c2bc766da -- *.ch/

wget -N https://commercibellici.ch/wp-content/themes/kgi/style/page.css
cp page.css commercibellici.ch/wp-content/themes/kgi/style/
cp page.css kriegsgeschaefte.ch/wp-content/themes/kgi/style/
cp page.css commercedeguerre.ch/wp-content/themes/kgi/style/

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

  fix1='-e s|et-divi-customizer-global-[0-9]*.min.css|'
  fix2='-e s|/[0-9]*/et-core-unified-tb-60-tb-141-[0-9]*-[0-9]*.min.css|'
  if [[ "$prefix" == "$prefixDE" ]]; then
    fix1+='et-divi-customizer-global-16035459764941.min.css'
    fix2+='/1034/et-core-unified-tb-60-tb-141-1034-16056879171024.min.css'
  elif [[ "$prefix" == "$prefixFR" ]]; then
    fix1+='et-divi-customizer-global-16052793644564.min.css'
    fix2+='/855/et-core-unified-tb-60-tb-141-855-16052795077831.min.css'
  else
    fix1+='et-divi-customizer-global-16020068515789.min.css'
    fix2+='/12/et-core-unified-tb-60-tb-141-12-16020068515789.min.css'
  fi
  fix1+='|g'
  fix2+='|g'

  fix3='-e s|/wp-content/uploads/useanyfont/5841graph-ff-condensed.woff|'
  fix3+=$prefix
  fix3+='/wp-content/uploads/useanyfont/5841graph-ff-condensed.woff|g'

  grep -rl -e 'href="' -e 'css' -e 'woff' "$folder" | xargs -L 1 sed -i -E $abs $root $urlDE $urlFR $urlIT $fix1 $fix2 $fix3
}

rewrite_lang "$prefixDE" "$prefixDE" "$prefixFR" "$prefixIT" kriegsgeschaefte.ch
rewrite_lang "$prefixFR" "$prefixDE" "$prefixFR" "$prefixIT" commercedeguerre.ch
rewrite_lang "$prefixIT" "$prefixDE" "$prefixFR" "$prefixIT" commercibellici.ch

echo '<head><meta http-equiv="refresh" content="0; url=https://gsoa.ch/spenden/" /></head><body></body>' > kriegsgeschaefte.ch/spenden/index.html
echo '<head><meta http-equiv="refresh" content="0; url=https://gssa.ch/dons/" /></head><body></body>' > commercedeguerre.ch/faire-un-don/index.html
echo '<head><meta http-equiv="refresh" content="0; url=https://it.gsoa.ch/donare/" /></head><body></body>' > commercibellici.ch/donare/index.html
echo '<head><meta http-equiv="refresh" content="0; url=https://gsoa.ch/kontakt/" /></head><body></body>' > kriegsgeschaefte.ch/kontakt/index.html
echo '<head><meta http-equiv="refresh" content="0; url=https://gssa.ch/contacts/" /></head><body></body>' > commercedeguerre.ch/contact/index.html
echo '<head><meta http-equiv="refresh" content="0; url=https://it.gsoa.ch/contatti/" /></head><body></body>' > commercibellici.ch/contatti/index.html


python3 -m http.server 8432
