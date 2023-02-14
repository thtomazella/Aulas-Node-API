## Habilitar o WSL:

https://github.com/codeedu/wsl2-docker-quickstart

1. Abrir powershell como admin
2. `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
3. `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
4. Reiniciar a maquina
5. Install pacote de atualizaçâo [wsl-kernel](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
6. Rode o comando `wsl` para testar
7. Solucao para o erro o serviço nao pode...:
Link: https://stackoverflow.com/questions/65583150/wsl-set-default-version-2-the-service-cannot-be-started-either-because-it-is
Solution: `sc config LxssManager start=auto`
8. `wsl --set-default-version 2`
9. Installar o linux pela microsoft store
10. Abrir o linux installado
11. Criar usuario (NOME: thiago, PASSWORD: 123456)

## Dicas:

1. Windows Terminal ajuda a trabalhar com multiplas janelas de terminal
2. Para acessar os seus arquivos windows rode: `cd /mnt/c/`

## Integracao com docker

1. Instale o [docker desktop](https://www.docker.com/products/docker-desktop/) pelo site official
2. Abra o docker desktop
3. Acessar configuraçôes do docker desktop
4. Acessar resources e ir em WSL INTEGRATION
5. Habilitar a maquina linux instalada (ubuntu)

