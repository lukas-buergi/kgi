#!/bin/bash

prefix="file://wsl.localhost/Debian/home/t4b/work/gsoa/kgi-website-static/kriegsgeschaefte.ch/"

find . -name '*\?ver=*' | sort | sed -E 's/(.*)\?(.*)/cp \1?\2 \1/' > tmp.sh
bash tmp.sh

abs='-e s|(href|src)="https?://(www.)?kriegsgeschaefte.ch/|\1="'
abs+=$prefix
abs+='|g'

root='-e s|(href|src)="/|\1="'
root+=$prefix
root+='|g'
grep -rl 'href="' *.ch | xargs -L 1 --verbose sed -i $abs $root
