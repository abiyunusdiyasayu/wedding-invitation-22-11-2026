
#!/bin/bash

while true
do
    git add .

    if ! git diff --cached --quiet; then
        if git commit -m "Auto Update $(date '+%Y-%m-%d %H:%M:%S')"; then
            if ! git push; then
                echo "GAGAL PUSH. Akan dicoba lagi pada siklus berikutnya."
            fi
        else
            echo "Commit gagal. Periksa pesan error Git."
        fi
    fi

    sleep 10
done
