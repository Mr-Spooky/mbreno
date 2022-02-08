import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  content: {
    padding: '20px',
    display: 'flex',
    width: '100%',
    minHeight: '75vh',
    maxWidth: '500px',
    minWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold !important',
    fontSize: '35px !important',
    marginBottom: '20px !important',
  },
  subtitle: {
    fontWeight: 'bold !important',
    fontSize: '20px !important',
    margin: '30px 0 10px 0 !important',
  },
  italic: {
    fontStyle: 'italic !important',
    marginBottom: '10px !important',
  },
  normal: {
    marginBottom: '10px !important',
  },
});

function Cgu() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography className={classes.title}>Mentions légales et conditions d&apos;utilisation</Typography>
      <Typography className={classes.italic}>
        Merci de lire attentivement les présentes modalités d&apos;utilisation du
        présent site avant de le parcourir. En vous connectant sur ce site, vous
        acceptez sans réserve les présentes modalités.
      </Typography>
      <Typography>Entreprise : MB réno (EIRL Boutin)</Typography>
      <Typography>Siret : 909.585.283.00015</Typography>
      <Typography>Nom Prénom : Boutin Marc</Typography>
      <Typography>Adresse de domicile : 1620 Route des Deux Roches, 79510 Coulon, Nouvelle-Aquitaine, France</Typography>
      <Typography>Numéro de téléphone : 07.70.73.69.79</Typography>
      <Typography>Courrier électronique : mb.reno@orange.fr</Typography>
      <Typography>Hébergeur du site : Netlify, Inc. - 2325 3rd Street, Suite 296, San Francisco, California 94107 - (415) 691-1573</Typography>
      <Typography className={classes.subtitle}>Conditions d&apos;utilisation</Typography>
      <Typography className={classes.normal}>
        Le site accessible par l&apos;url suivant : www.mbreno.fr est exploité dans le respect de la législation française.
        L&apos;utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, vous reconnaissez
        avoir pris connaissance de ces conditions et les avoir acceptées. Celles-ci pourront être modifiées à tout moment et
        sans préavis par la société MB réno.
        MB réno ne saurait être tenu pour responsable en aucune manière d’une mauvaise utilisation du service.
      </Typography>
      <Typography className={classes.normal}>
        Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour, mais
        peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui
        parait être un dysfonctionnement, merci de bien vouloir le signaler par email (mb.reno@orange.fr) en décrivant le problème
        de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, …).
      </Typography>
      <Typography className={classes.normal}>
        Tout contenu téléchargé se fait aux risques et périls de l&apos;utilisateur et sous sa seule responsabilité. En conséquence, MB réno
        ne saurait être tenu responsable d&apos;un quelconque dommage subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une quelconque
        perte de données consécutives au téléchargement.
      </Typography>
      <Typography className={classes.normal}>Les photos ne sont pas contractuelles.</Typography>
      <Typography className={classes.subtitle}>Litiges</Typography>
      <Typography className={classes.normal}>
        Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de
        l&apos;interprétation ou de l&apos;exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la
        société MB réno. La langue de référence, pour le règlement de contentieux éventuels, est le français.
      </Typography>
      <Typography className={classes.subtitle}>Droit d&apos;accès</Typography>
      <Typography className={classes.normal}>
        Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes
        physiques à l&apos;égard des traitements de données à caractère personnel) relative à l&apos;informatique, aux fichiers et aux libertés, les
        internautes disposent d’un droit d’accès, de rectification, de modification et de suppression concernant les données qui les concernent
        personnellement. Ce droit peut être exercé par voie postale auprès de Marc Boutin 1620 Route des Deux Roches 79510 Coulon ou
        par voie électronique à l’adresse email : mb.reno@orange.fr.
      </Typography>
      <Typography className={classes.subtitle}>Confidentialité</Typography>
      <Typography className={classes.normal}>
        Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers hormis pour la bonne exécution de la
        prestation.
      </Typography>
      <Typography className={classes.subtitle}>Propriété intellectuelle</Typography>
      <Typography className={classes.normal}>
        Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos,
        gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société MB réno à l&apos;exception des marques,
        logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
      </Typography>
      <Typography className={classes.normal}>
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments
        est strictement interdite sans l&apos;accord exprès par écrit de MB réno. Cette représentation ou reproduction, par quelque procédé que ce
        soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de
        cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les
        propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
      </Typography>
      <Typography className={classes.normal}>
        Les utilisateurs et visiteurs du site internet peuvent mettre en place un hyperlien en direction de ce site, mais uniquement en direction
        de la page d&apos;accueil, accessible à l&apos;URL suivante : www.mbreno.fr, à condition que ce lien s&apos;ouvre dans une nouvelle fenêtre.
        En particulier un lien vers une sous page (« lien profond ») est interdit, ainsi que l&apos;ouverture du présent site au sein d’un cadre
        (« framing »), sauf avec l&apos;autorisation express et préalable de MB réno.
      </Typography>
      <Typography className={classes.normal}>
        Pour toute demande d&apos;autorisation ou d&apos;information, veuillez nous contacter par email : mb.reno@orange.fr.
      </Typography>
      <Typography className={classes.subtitle}>Information et exclusion</Typography>
      <Typography className={classes.normal}>
        MB réno met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de son site internet.
        Toutefois, des erreurs ou omissions peuvent survenir. L&apos;internaute devra donc s&apos;assurer de l&apos;exactitude des informations
        auprès de MB réno et signaler toutes modifications du site qu&apos;il jugerait utile. MB réno n&apos;est en aucun cas responsable de
        l&apos;utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
      </Typography>
      <Typography className={classes.subtitle}>Cookies</Typography>
      <Typography className={classes.normal}>
        Ce site n&apos;utilise que des cookies obligatoire à son bon fonctionnement. Ils peuvent tout de même être refusés depuis les réglages
        du navigateur, mais cela pourrait causer des effets potentiellements négatifs pour le bon fonctionnement du site.
      </Typography>
    </div>
  );
}

export default Cgu;
