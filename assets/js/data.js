window.SITE_DATA = {
  conference: {
    title: 'The Mobile Methods Mini-con @OSU',
    tagline: 'Advancing mobile methods and analytics in Communication and beyond',
    dates: 'May 1–2, 2026',
    hostLine:
      'Hosted by the School of Communication in coordination with TDAI at The Ohio State University',
    rsvpUrl: '#',
    rsvpReady: false
  },
  nav: [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'program.html', label: 'Program' },
    { href: 'speakers.html', label: 'Speakers' },
    { href: 'venue.html', label: 'Venue' },
    { href: 'organizers.html', label: 'Organizers' },
    { href: 'registration.html', label: 'Registration' },
    { href: 'contact.html', label: 'Contact' }
  ],
  speakers: Array.from({ length: 12 }, (_, i) => ({
    name: `Invited Speaker ${i + 1}`,
    affiliation: 'Affiliation forthcoming',
    bio: 'Speaker details forthcoming',
    image: 'assets/images/speaker-placeholder.svg'
  })),
  organizers: [
    {
      name: 'Rob Bond',
      title: 'Organizer',
      bio: 'Rob Bond is an organizer of the Mini-con. Full professional bio forthcoming and easy to update in the site data file.',
      image: 'assets/images/organizer-placeholder.svg',
      alt: 'Placeholder portrait for Rob Bond'
    },
    {
      name: 'Joe Bayer',
      title: 'Organizer',
      bio: 'Joe Bayer is an organizer of the Mini-con. Full professional bio forthcoming and easy to update in the site data file.',
      image: 'assets/images/organizer-placeholder.svg',
      alt: 'Placeholder portrait for Joe Bayer'
    },
    {
      name: 'Scott Campbell',
      title: 'Organizer',
      bio: 'Scott Campbell is an organizer of the Mini-con. Full professional bio forthcoming and easy to update in the site data file.',
      image: 'assets/images/organizer-placeholder.svg',
      alt: 'Placeholder portrait for Scott Campbell'
    }
  ],
  venues: {
    day1: {
      name: 'Energy Advancement and Innovation Center',
      link: 'https://fdc.osu.edu/energy-advancement-and-innovation-center',
      blurb:
        'Day 1 programming will be hosted in person at the Energy Advancement and Innovation Center. Additional logistical details will be added as they are confirmed.'
    },
    day2: {
      name: 'Grange Insurance Audubon Center',
      link: 'https://www.audubon.org/grange',
      blurb:
        'Day 2 workshop activities will be hosted in person at the Grange Insurance Audubon Center. Additional logistical details will be added as they are confirmed.'
    }
  }
};
