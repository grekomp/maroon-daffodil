---
title: Kontakt
sections:
  - title_align: center
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: stacked
    enable_card: true
    form_action: lorem-ipsum
    form_fields:
      - input_type: text
        label: Imię i nazwisko
        default_value: Jan Kowalski
        is_required: true
        type: form_field
        name: Imię i nazwisko
      - input_type: email
        label: E-mail
        default_value: adres@example.com
        is_required: true
        type: form_field
        name: Email
      - input_type: tel
        label: Telefon
        default_value: 123 456 789
        is_required: true
        type: form_field
        name: Telefon
      - input_type: textarea
        name: Wiadomość
        label: Wiadomość
        default_value: Treść wiadomości
        options: []
        is_required: true
        type: form_field
      - input_type: checkbox
        name: Oświadczenie RODO
        label: >
          Oświadczam, iż zapoznałem/zapoznałam się z [klauzulą informacyjną
          RODO](/rodo)
        options: []
        is_required: true
        type: form_field
    submit_label: Wyślij
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    has_border: false
    background_color: none
    background_image_opacity: 0
    background_image_size: cover
    background_image_position: center center
    background_image_repeat: no-repeat
    type: form_section
    title: Kontakt
    content: |
      ### Dane firmy

      *   Copos sp. z o. o.

      *   ul. Knurowska 61, 41-800 Zabrze

      *   NIP: 648 22 22 066<br>

      *   KRS: 0000100408

      ### Dane kontaktowe

      *   email: <copos@copos.com.pl>
      *   **telefon:** [**32 276 13 42**](tel:322761342)

      ### Biuro czynne

      Poniedziałek - Piątek<br>
      7:00 - 15:00
    form_id: contact-form-1
    subtitle: sad
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: advanced
---
