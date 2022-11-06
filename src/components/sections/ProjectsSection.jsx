import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from '../Card';

const projects = [
  {
    id: 1,
    title: 'Test Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptatem a. Natus error voluptate impedit, minus ipsum magni ex.',
    imageSrc: 'https://picsum.photos/600/100?random=1'
  },
  {
    id: 2,
    title: 'Test Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptatem a. Natus error voluptate impedit, minus ipsum magni ex.',
    imageSrc: 'https://picsum.photos/600/100?random=2'
  },
  {
    id: 3,
    title: 'Test Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptatem a. Natus error voluptate impedit, minus ipsum magni ex.',
    imageSrc: 'https://picsum.photos/600/100?random=3'
  },
  {
    id: 4,
    title: 'Test Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis voluptatem a. Natus error voluptate impedit, minus ipsum magni ex.',
    imageSrc: 'https://picsum.photos/600/100?random=4'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            url="https://github.com/"
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
