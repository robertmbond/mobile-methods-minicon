window.SITE_DATA = {
  conference: {
    title: 'The Mobile Methods Mini-con @OSU',
    tagline: 'Advancing mobile methods and analytics in Communication and beyond',
    dates: 'May 1, 2026',
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
      name: 'Joe Bayer',
      title: 'Associate Professor, School of Communication, The Ohio State University',
      bio: 'Joe Bayer is an Associate Professor in the School of Communication at Ohio State University. His research focuses on mobile methods, particularly the study of mental processes that underlie social connection.<br /><br /><a href="https://www.josephbayer.com/" target="_blank" rel="noopener noreferrer">Visit Joe Bayer\'s website</a>.',
      image: 'assets/images/joe-bayer.jpg',
      alt: 'Headshot of Joe Bayer'
    },
    {
      name: 'Rob Bond',
      title: 'Professor, School of Communication, The Ohio State University',
      bio: 'Rob Bond is a Professor in the School of Communication at Ohio State University and is the faculty lead of the Computational Social Sciences Community of Practice at the Translational Data Analytics Institute. His research focuses on political communication and social networks.<br /><br /><a href="https://robertmbond.net/" target="_blank" rel="noopener noreferrer">Visit Rob Bond\'s website</a>.',
      image: 'assets/images/rob-bond.jpg',
      alt: 'Headshot of Rob Bond'
    },
    {
      name: 'Scott Campbell',
      title: 'Rinehart Chair in Mediated Communication, School of Communication, The Ohio State University',
      bio: 'Scott Campbell is the Rinehart Chair in Mediated Communication in the School of Communication at Ohio State University. His research explains the social uses and consequences of mobile media and communication.<br /><br /><a href="https://comm.osu.edu/people/campbell.2844" target="_blank" rel="noopener noreferrer">Visit Scott Campbell\'s website</a>.',
      image: 'assets/images/scott-campbell.jpg',
      alt: 'Headshot of Scott Campbell'
    }
  ],
  venues: {
    day1: {
      name: 'Energy Advancement and Innovation Center',
      link: 'https://fdc.osu.edu/energy-advancement-and-innovation-center',
      blurb:
        'Day 1 programming will be hosted in person at the Energy Advancement and Innovation Center. Additional logistical details will be added as they are confirmed.'
    }
  }
};
