
## Chargement des packages utilises dans le programme ----
library(lubridate)
library(dplyr)
library(tidyr)
library(stringr)
library(forcats)
library(ggplot2)


# determination journee de reference
date_jour <- Sys.time()

#date retardee de 12h
date_jour_12hmoins <- date_jour - dhours(12)

# recuperation de la partie date date_jour_12hmoins
annee_date_jour <- paste0(year(date_jour_12hmoins))
mois_date_jour <- ifelse(str_length(month(date_jour_12hmoins))==1,
                         paste0("0",month(date_jour_12hmoins)),
                         paste0(month(date_jour_12hmoins)))
jour_date_jour <- ifelse(str_length(day(date_jour_12hmoins))==1,
                         paste0("0",day(date_jour_12hmoins)),
                         paste0(day(date_jour_12hmoins)))

date_ref <- paste0(annee_date_jour,"-",mois_date_jour,"-",jour_date_jour)

# date_ref <- as.POSIXct(paste0(annee_date_jour,"-",mois_date_jour,"-",jour_date_jour," 00:00:00")) - dhours(decalage_heure)
rm(annee_date_jour,mois_date_jour,jour_date_jour)

chemin <- "C:/Users/SIAR_ycg8l6/Docs/ProgrammesR/CompteurAlertes_5min__Synthese/"
cheminSynthTOT <- "C:/Users/SIAR_ycg8l6/Docs/ProgrammesR/CompteurAlertes_SyntheseTOT/"
cheminSynthTOT2 <- "C:/inetpub/wwwroot/peps-si/SyntheseJour/"

#######################################################################################
#######################################################################################

#### ... vers cheminSynthTOT ...

## date du jour...
file.remove(paste0(cheminSynthTOT,"date_json.json"))
file.copy(paste0(chemin,"date_json.json"), paste0(cheminSynthTOT,"date_json.json"))

## json data
file.remove(paste0(cheminSynthTOT,"df_global.json"))
file.copy(paste0(chemin,"df_global.json"), paste0(cheminSynthTOT,"df_global.json"))
file.remove(paste0(cheminSynthTOT,"df_global_heure.json"))
file.copy(paste0(chemin,"df_global_heure.json"), paste0(cheminSynthTOT,"df_global_heure.json"))

#######################################################################################
#######################################################################################

#### ... vers cheminSynthTOT2 ...

## date du jour...
file.remove(paste0(cheminSynthTOT2,"date_json.json"))
file.copy(paste0(chemin,"date_json.json"), paste0(cheminSynthTOT2,"date_json.json"))

## json data
file.remove(paste0(cheminSynthTOT2,"df_global.json"))
file.copy(paste0(chemin,"df_global.json"), paste0(cheminSynthTOT2,"df_global.json"))
file.remove(paste0(cheminSynthTOT2,"df_global_heure.json"))
file.copy(paste0(chemin,"df_global_heure.json"), paste0(cheminSynthTOT2,"df_global_heure.json"))

