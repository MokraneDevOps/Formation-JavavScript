#!/bin/bash

# Mise à jour de la liste des paquets
echo "Mise à jour de la liste des paquets..."
sudo apt update

# Téléchargement du paquet Discord
echo "Téléchargement du fichier .deb de Discord..."
wget -O discord.deb "https://discord.com/api/download?platform=linux&format=deb"

# Installation du paquet Discord
echo "Installation de Discord..."
sudo dpkg -i discord.deb

# Installation des dépendances manquantes, si nécessaire
echo "Résolution des dépendances manquantes..."
sudo apt install -f -y

# Suppression du fichier .deb téléchargé
echo "Nettoyage des fichiers..."
rm discord.deb

echo "Installation terminée. Vous pouvez lancer Discord depuis le menu d'applications ou en tapant 'discord' dans le terminal."
