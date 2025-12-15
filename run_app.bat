@echo off
echo ==========================================
echo    A iniciar Deep Scout Pro (Ambiente de Teste)
echo ==========================================

echo 1. A iniciar o Servidor (Backend)...
start "Deep Scout Server" cmd /k "node api/index.js"

echo 2. A iniciar o Cliente (Frontend)...
start "Deep Scout Client" cmd /k "cd client && npm run dev"

echo 3. A aguardar que os servicos arranquem...
timeout /t 5 >nul

echo 4. A abrir o browser...
start http://localhost:3000

echo ==========================================
echo    Tudo pronto! Podes minimizar esta janela.
echo ==========================================
pause
