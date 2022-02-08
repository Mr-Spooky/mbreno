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

function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography className={classes.title}>Politique de confidentialité</Typography>
      <Typography className={classes.italic}>
        MB réno respecte votre vie privée et veille à ce que toutes les données personnelles
        soient traitées conformément aux meilleures pratiques de confidentialité et aux lois
        applicables en matière de confidentialité des données, notamment le règlement général
        de l&apos;Union européenne sur la protection des données n ° 2016/679 (ci-après «RGPD»).
        Cette politique de confidentialité s&apos;applique au traitement effectué sur mbreno.fr.
      </Typography>
      <Typography className={classes.normal}>
        Dans ce contexte, les données personnelles désignent toute information relative à une
        personne physique identifiée ou identifiable (une personne concernée) une personne
        physique identifiable est une personne qui peut être identifiée, directement ou
        indirectement, notamment par référence à un identifiant tel qu&apos;un nom, un numéro d&apos;identification,
        des données de localisation, un identifiant en ligne ou à un ou plusieurs facteurs propres
        à l&apos;aspect physique, physiologique, l&apos;identité génétique, mentale, économique, culturelle
        ou sociale de cette personne physique.
      </Typography>
      <Typography className={classes.normal}>
        Aux fins du présent avis, en tant que personne concernée et utilisateur du site Web de
        MB réno, vous serez ci-après dénommé «vous» / «votre».
      </Typography>
      <Typography className={classes.normal}>
        MB réno agit en qualité de Responsable de traitement dans le traitement de vos données personnelles
        (c&apos;est-à-dire qu&apos;elle détermine les finalités et les moyens du traitement desdites données).
        Il sera ci-après dénommé «Nous» / «Notre».
      </Typography>
      <Typography className={classes.subtitle}>Quelles données personnelles collectons-nous ?</Typography>
      <Typography className={classes.normal}>
        Nous collectons / traitons les données personnelles suivantes vous concernant:
      </Typography>
      <Typography className={classes.normal}>
        Données d&apos;identification: telles que nom, prénom, numéro de téléphone, adresse e-mail, adresse postale
      </Typography>
      <Typography className={classes.normal}>
        Nous traitons les données personnelles ci-dessus aux fins suivantes :
        fournir une réponse à toute demande d&apos;informations que vous auriez pu adresser à MB réno via des formulaires en ligne.
      </Typography>
      <Typography className={classes.subtitle}>Quelles catégories particulières de données personnelles MB réno traite à votre sujet ?</Typography>
      <Typography className={classes.normal}>
        Dans le cadre de votre utilisation de notre site Web, nous ne collectons aucune catégorie particulière de données personnelles.
      </Typography>
      <Typography className={classes.normal}>
        Comment utilisons-nous vos données personnelles ?
      </Typography>
      <Typography className={classes.normal}>
        Vos données personnelles sont collectées et utilisées aux fins susmentionnées sur la base de votre consentement.
      </Typography>
      <Typography className={classes.normal}>
        Veuillez noter que vous pouvez retirer votre consentement à tout moment. Cependant, si vous décidez de le faire,
        vous ne pourrez plus communiquer avec MB réno via des formulaires en ligne.
        Ce retrait n&apos;affecte cependant pas la licéité de tout traitement effectué avant votre retrait.
      </Typography>
      <Typography className={classes.normal}>
        Quand partageons-nous vos données personnelles?
      </Typography>
      <Typography className={classes.normal}>
        Nous ne partageons pas vos données personnelles.
      </Typography>
      <Typography className={classes.normal}>
        Comment sécurisons-nous vos données personnelles ?
      </Typography>
      <Typography className={classes.normal}>
        Nous utilisons des mesures techniques et organisationnelles appropriées conçues pour protéger les données personnelles
        collectées à votre sujet. Ces mesures visent à offrir un niveau de sécurité adapté au risque de traitement de vos
        informations personnelles conformément aux normes MB réno.
      </Typography>
      <Typography className={classes.normal}>
        Combien de temps vos données personnelles seront-elles conservées?
      </Typography>
      <Typography className={classes.normal}>
        Vos données personnelles seront conservées jusqu&apos;à ce que l&apos;utilisateur demande de les supprimer.
      </Typography>
      <Typography className={classes.subtitle}>Quels sont vos droits en ce qui concerne vos données personnelles ?</Typography>
      <Typography className={classes.normal}>
        Conformément à la loi &quot; Informatique et Libertés &quot; n° 78-17 du 6 janvier 1978 modifiée et au RGPD, vous avez le droit de :
      </Typography>
      <Typography className={classes.normal}>
        - d&apos;accéder à Vos Données Personnelles et d&apos;en obtenir une copie
      </Typography>
      <Typography className={classes.normal}>
        - rectifier Vos Données Personnelles
      </Typography>
      <Typography className={classes.normal}>
        - demander l&apos;effacement de vos données personnelles, sauf si le traitement est fondé sur le respect d&apos;une obligation
        légale du responsable du traitement
      </Typography>
      <Typography className={classes.normal}>
        - demander la restriction du traitement de Vos Données Personnelles dans certaines circonstances
      </Typography>
      <Typography className={classes.normal}>
        - et le droit de demander la portabilité de Vos Données Personnelles, le cas échéant
      </Typography>
      <Typography className={classes.normal}>
        Considérant que la base juridique du traitement est votre consentement, nous vous rappelons que vous pouvez retirer ledit consentement
        à tout moment. Si vous décidez de le faire, vous ne pourrez plus communiquer avec MB réno via des formulaires
        en ligne. Ce retrait n&apos;affecte toutefois pas la licéité de tout traitement effectué avant celui-ci.
      </Typography>
      <Typography className={classes.normal}>
        Vous pouvez exercer vos droits en nous contactant à l&apos;adresse mb.reno@orange.fr. Dans le cadre
        de notre réponse à votre demande, Il pourra vous être demandé de fournir des informations supplémentaires pour confirmer votre
        identité et/ou pour faciliter la localisation des données personnelles associées à votre demande.
      </Typography>
      <Typography className={classes.normal}>
        Enfin, vous avez le droit de faire part de toute préoccupation concernant la manière dont vos données personnelles sont traitées
        à une autorité de contrôle compétente, à savoir l&apos;autorité de l&apos;état membre de votre résidence habituelle ou de votre lieu de
        travail ou du lieu où vous pensez qu&apos;une violation présumée de vos droits s&apos;est produite.
      </Typography>
      <Typography className={classes.subtitle}>Mises à jour de l&apos;avis de confidentialité</Typography>
      <Typography className={classes.normal}>
        Nous pouvons être amenés à mettre à jour cette politique de confidentialité de temps à autre en réponse à des évolutions juridiques,
        techniques ou commerciales. Lorsque nous mettons à jour notre politique de confidentialité, nous prendrons les mesures appropriées
        pour vous informer, en fonction de l&apos;importance des changements que nous apportons. Nous obtiendrons votre consentement pour
        toute modification importante de la politique de confidentialité si et quand cela est requis par les lois applicables en matière
        de protection des données.
      </Typography>
      <Typography className={classes.normal}>
        Vous pouvez vérifier la date de la dernière mise à jour de cette politique de confidentialité en consultant la date de
        &quot;dernière mise à jour&quot; affichée au bas de cette politique de confidentialité.
      </Typography>
      <Typography className={classes.italic}>Date de la dernière mise à jour : 01 février 2022</Typography>
    </div>
  );
}

export default PrivacyPolicy;
