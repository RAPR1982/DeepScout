@echo off
echo A tentar metodo alternativo de partilha (via SSH)...
echo Este metodo costuma funcionar melhor em redes empresariais.
echo ---------------------------------------------
echo Quando aparecer "Connection established", copia o link que termina em .lhr.life ou localhost.run
echo ---------------------------------------------
ssh -R 80:localhost:3000 -o "StrictHostKeyChecking=no" localhost.run
pause
