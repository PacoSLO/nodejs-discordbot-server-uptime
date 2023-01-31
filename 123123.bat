@echo off
for /f "tokens=2 delims==; " %%a in (' wmic process call create "bot.bat" ^| find "ProcessId" ') do set PID=%%a
echo "%PID%"
pause