#!/bin/bash

# Mise à jour du système
echo "Mise à jour du système..."
sudo apt update && sudo apt upgrade -y

# Téléchargement du paquet Discord
echo "Téléchargement de Discord..."
wget -O discord.deb "https://discord.com/api/download?platform=linux&format=deb"

# Installation du paquet Discord
echo "Installation de Discord..."
sudo dpkg -i discord.deb

# Installation des dépendances manquantes
echo "Installation des dépendances manquantes..."
sudo apt install -f -y

# Suppression du fichier téléchargé
rm discord.deb

echo "Installation terminée. Vous pouvez lancer Discord depuis votre menu d'applications ou en tapant 'discord' dans le terminal."
