# Istruzioni per l'Installazione di Bun

## Requisiti

- Node.js v16.0 o superiore
- npm v7.0 o superiore

## Installazione su macOS

1. Apri il Terminale.
2. Esegui il seguente comando per installare Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

3. Aggiungi Bun al tuo PATH aggiungendo la seguente riga al tuo `.bashrc` o `.zshrc`:

```sh
export PATH="$HOME/.bun/bin:$PATH"
```

4. Ricarica il file di configurazione della shell:

```sh
source ~/.bashrc
# o per zsh
source ~/.zshrc
```

## Installazione su Windows

1. Apri PowerShell come Amministratore.
2. Esegui il seguente comando per installare Bun:

```powershell
iwr https://bun.sh/install -useb | iex
```

3. Aggiungi Bun al tuo PATH eseguendo il seguente comando in PowerShell:

```powershell
$env:Path += ";$env:UserProfile\.bun\bin"
```

## Installazione su WSL2 (Windows Subsystem for Linux)

4. Apri il terminale WSL.
5. Esegui il seguente comando per installare Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

6. Aggiungi Bun al tuo PATH aggiungendo la seguente riga al tuo `.bashrc` o `.zshrc`:

```sh
export PATH="$HOME/.bun/bin:$PATH"
```

7. Ricarica il file di configurazione della shell:

```sh
source ~/.bashrc
# o per zsh
source ~/.zshrc
```

## Verifica dell'Installazione

Per verificare che Bun sia stato installato correttamente, esegui il seguente comando:

```sh
bun --version
```

