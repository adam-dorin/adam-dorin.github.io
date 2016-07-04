mkdir $1
cp template/* $1
git add $1
git commit $1 -m "New Post"
git push
rm $1 -rfv
