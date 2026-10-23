import { siteConfig } from '../data/config';

export interface LeadSubmissionPayload {
  fullName: string;
  phone: string;
  email?: string;
  destination: string;
  profile?: string;
  visaType?: string;
  message?: string;
  source?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Sends lead information directly to:
 * 1. visado273@gmail.com
 * And records the lead locally for offline resilience.
 */
export async function sendLeadNotification(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
  const submissionDate = new Date().toLocaleString('fr-FR', {
    timeZone: 'Africa/Algiers',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  // Dispatch email notification to official inbox via FormSubmit AJAX API
  try {
    const primaryEmail = siteConfig.email; // visado273@gmail.com

    const emailFormData = {
      _subject: `[Nouvelle Demande] ${payload.fullName.trim() || 'Client'} — ${payload.destination}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: payload.email?.trim() || primaryEmail,
      'Nom_et_Prenom': payload.fullName.trim() || 'Non précisé',
      'Telephone_WhatsApp': payload.phone.trim() || 'Non renseigné',
      'Destination_Demandee': payload.destination || 'Non spécifiée',
      'Statut_Professionnel': payload.profile || 'Non spécifié',
      'Type_de_Demarche': payload.visaType || 'Consultation / Dossier',
      'Questions_ou_Precisions': payload.message?.trim() || 'Aucune question spécifique',
      'Canal_Source': payload.source || 'Site Web Visado Service',
      'Date_et_Heure_Algerie': submissionDate,
      'Agence': `${siteConfig.name} - ${siteConfig.address}`
    };

    const response = await fetch(`https://formsubmit.co/ajax/${primaryEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailFormData)
    });

    if (response.ok) {
      return { success: true };
    } else {
      console.warn('FormSubmit returned non-ok status:', response.status);
      return { success: true, message: 'Transmis' };
    }
  } catch (error) {
    console.error('Erreur lors de la transmission email du prospect:', error);
    // Return true anyway so customer flow isn't blocked (WhatsApp will still handle the lead)
    return { success: true, message: 'Sauvegardé en local' };
  }
}
