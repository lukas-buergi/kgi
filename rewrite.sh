#!/bin/bash

#prefix="file://wsl.localhost/Debian/home/t4b/work/gsoa/kgi-website-static/kriegsgeschaefte.ch"
prefix='http://localhost:8432/kriegsgeschaefte.ch'

find . -name '*\?ver=*' | sort | sed -E 's/(.*)\?(.*)/cp \1?\2 \1/' > tmp.sh
bash tmp.sh

abs='-e s|(href\|src)="https?://(www.)?kriegsgeschaefte.ch/|\1="'
abs+=$prefix/
abs+='|g'

root='-e s|(href\|src)="/|\1="'
root+=$prefix/
root+='|g'

urlDE='-e s|https://kriegsgeschaefte.ch|'
urlDE+=$prefix
urlDE+='|g'

urlFR='-e s|https://kriegsgeschaefte.ch|'
urlFR+=$prefix
urlFR+='|g'

urlIT='-e s|https://kriegsgeschaefte.ch|'
urlIT+=$prefix
urlIT+='|g'

grep -rl 'href="' *.ch | xargs -L 1 sed -i -E $abs $root $urlDE $urlFR $urlIT
