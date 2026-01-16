
---
title: "Politique de confidentialité"
meta_title: "Politique de confidentialité – Votre vie privée, notre engagement"
description: "Découvrez comment nous réalisons des mesures d’audience anonymisées et sans cookies grâce à une instance Matomo auto‑hébergée."
draft: false
---

### Politique de confidentialité

Votre vie privée est importante pour nous. Ce site est un blog communautaire, et nous nous engageons à protéger vos données ainsi qu’à limiter les informations collectées au strict nécessaire.

## 1. Données que nous collectons (mesure d’audience uniquement)

Nous utilisons **Matomo**, un outil d’analytics auto‑hébergé, afin de mesurer l’audience de notre site et d’améliorer son contenu.  
Ce traitement est entièrement conforme aux réglementations sur la vie privée et configuré selon les recommandations Matomo pour un fonctionnement **sans cookies** et respectueux de la confidentialité.

Concrètement, cela signifie :

- **Aucune donnée personnelle n’est collectée.**
- **Les adresses IP sont totalement anonymisées**, ce qui empêche toute identification des visiteurs.
- **Aucune donnée n’est partagée avec des tiers.**
- **Aucun cookie n’est déposé sur votre appareil** pour la mesure d’audience.
- **Les données collectées sont utilisées exclusivement à des fins statistiques**, par exemple pour comprendre quelles pages sont les plus consultées ou détecter des erreurs.

### Durée de conservation
Les données d’audience anonymisées sont conservées pendant **13 mois**, ce qui correspond à la durée recommandée pour les statistiques de fréquentation.

## 2. Base légale

Notre utilisation de Matomo est :

- auto‑hébergée,  
- sans cookies,  
- anonymisée,  
- sans partage avec des tiers,  
- strictement limitée à la mesure d’audience,

Elle est donc **exempte de consentement** selon les lignes directrices européennes et françaises.

La base légale applicable est **l’intérêt légitime** (article 6(1)(f) du RGPD).

## 3. Vos droits

Même en l’absence de cookies ou de données identifiantes, vous avez le droit de **vous opposer à la mesure d’audience** à tout moment.

Vous pouvez désactiver la mesure ci‑dessous :

<div id="analytics-optout" style="margin:1rem 0;">
  <p>
    Vous pouvez <strong>vous opposer</strong> à la mesure d’audience à tout moment.  
    Votre choix sera enregistré <em>sans cookies</em> (dans le stockage local de votre navigateur).
  </p>

  <button id="optout-btn" type="button" style="padding:.6rem 1rem; cursor:pointer;">
    Chargement...
  </button>

  <p id="optout-status" style="margin-top:.5rem; color:#555;"></p>
</div>

<script>
  (function() {
    const KEY = 'analytics_optout';
    const btn = document.getElementById('optout-btn');
    const status = document.getElementById('optout-status');

    function isOptedOut() {
      return localStorage.getItem(KEY) === 'true';
    }

    function render() {
      if (isOptedOut()) {
        btn.textContent = 'Réactiver la mesure d’audience (opt-in)';
        status.textContent = 'Statut actuel : mesure d’audience désactivée pour ce navigateur.';
      } else {
        btn.textContent = 'Désactiver la mesure d’audience (opt-out)';
        status.textContent = 'Statut actuel : mesure d’audience activée (anonymisée, sans cookie).';
      }
    }

    btn.addEventListener('click', function() {
      if (isOptedOut()) {
        localStorage.removeItem(KEY); // opt-in
      } else {
        localStorage.setItem(KEY, 'true'); // opt-out
      }
      render();
      if (confirm('Votre préférence a été enregistrée. Voulez-vous recharger la page maintenant ?')) {
        location.reload();
      }
    });

    render();
  })();
</script>

Cela exclura vos visites des rapports statistiques anonymisés.

## 4. Liens externes

Ce site peut inclure des liens vers des services externes (par ex. vidéos, articles, autres sites).  
Ces sites tiers peuvent traiter des données selon leurs propres politiques.  
Nous vous encourageons à consulter leurs déclarations de confidentialité lorsque vous les visitez.

## 5. Mise à jour de cette politique

Si nous modifions notre configuration analytics ou les données que nous traitons, nous mettrons cette page à jour.  
La date de révision la plus récente sera toujours affichée ci‑dessous.

**Dernière mise à jour : janvier 2026**
