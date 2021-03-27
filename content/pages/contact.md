---
title: Kontakt
sections:
  - title_align: center
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: stacked
    enable_card: true
    form_id: lorem-ipsum
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
        name: Zgoda RODO 1
        label: >-
          Wyrażam zgodę na przetwarzanie podanych przeze mnie w powyższym
          formularzu danych osobowych w celu wyjaśnienia zgłoszonej przeze mnie
          sprawy i kontaktu ze mną w związku z moim zapytaniem. Zgoda jest zgodą
          dobrowolną, którą można wycofać w dowolnym momencie (bez wpływu na
          zgodność przetwarzania, którego dokonano przed jej wycofaniem),
        options: []
        is_required: true
        type: form_field
      - input_type: checkbox
        name: Zgoda RODO 2
        label: >-
          Wyrażam zgodę na otrzymywanie informacji o treściach marketingowych oraz
handlowych w formie elektronicznej (e-mail, SMS) oraz w formie połączeń
głosowych (rozmowy telefoniczne). Zgoda jest zgodą dobrowolną, którą można
wycofać w dowolnym momencie (bez wpływu na zgodność przetwarzania, którego
dokonano przed jej wycofaniem),
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
      - Copos sp. z o. o.
      - ul. Knurowska 61, 41-800 Zabrze


      - NIP: 648 22 22 066<br>
      - KRS: 0000100408

      ### Dane kontaktowe

      - email: <copos@copos.com.pl>
      - telefon: [32 276 13 42](tel:322761342)

      ### Biuro czynne

      Poniedziałek - Piątek<br>
      7:00 - 15:00
  - title: Kontakt
    actions: []
    grid_items:
      - title_align: left
        content: |
          ## Dane firmy

          - Copos sp. z o. o.
          - ul. Knurowska 61, 41-800 Zabrze


          - NIP: 648 22 22 066<br>
          - KRS: 0000100408

          ## Dane kontaktowe

          - email: <copos@copos.com.pl>
          - telefon: [32 276 13 42](tel:322761342)

          ## Biuro czynne

          Poniedziałek - Piątek<br>
          7:00 - 15:00
        content_align: left
        actions: []
        actions_align: left
        actions_width: auto
        image_alt: lorem-ipsum
        image_position: top
        image_width: fifty
        image_align: left
        image_has_padding: false
        type: grid_item
      - title: lorem-ipsum
        subtitle: lorem-ipsum
        title_align: left
        content: >-
          ## Lorem ipsum


          Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.


          - Lorem ipsum

          - dolor sit amet
        content_align: left
        actions: []
        actions_align: left
        actions_width: auto
        image_alt: lorem-ipsum
        image_position: top
        image_width: fifty
        image_align: left
        image_has_padding: false
        type: grid_item
    grid_cols: three
    grid_gap_vert: small
    grid_gap_horiz: small
    enable_cards: false
    align: center
    padding_top: medium
    padding_bottom: medium
    has_border: false
    background_color: none
    background_image_opacity: 0
    background_image_size: cover
    background_image_position: center center
    background_image_repeat: no-repeat
    type: grid_section
  - type: grid_section
    grid_items:
      - title: Partnering and Sponsorships
        title_align: center
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: link
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-1.svg
        image_alt: Partnering and sponsorships icon
        image_position: top
        image_align: center
        image_has_padding: true
      - title: Help & Support
        title_align: center
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-2.svg
        image_alt: Help and support icon
        image_position: top
        image_align: center
        image_has_padding: true
      - title: Other Queries
        title_align: center
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel.
        content_align: center
        actions:
          - label: Get Support
            url: /general-enquiries
            style: primary
            has_icon: true
            icon: arrow-right
            icon_position: right
        actions_align: center
        image: images/classic/icon-3.svg
        image_alt: Other queries icon
        image_position: top
        image_align: center
        image_has_padding: true
    grid_cols: three
    grid_gap_horiz: medium
    grid_gap_vert: medium
    enable_cards: true
    align: center
    padding_top: large
    padding_bottom: large
    background_color: primary
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
