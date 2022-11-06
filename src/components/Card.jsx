import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, url, imageSrc }) => {
  return (
    <a href={url} target="_blank">
      <VStack
        color="black"
        backgroundColor="white"
        cursor="pointer"
        borderRadius="xl"
      >
        <Image src={imageSrc} alt={title} />
        <VStack spacing={4} p={4} alignItems="flex-start">
          <HStack justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="md">
              {title}
            </Heading>
          </HStack>
          <Text color="#64748b" fontSize="lg">
            {description}
          </Text>

          <HStack spacing={2} alignItems="center">
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </a>
  );
};

export default Card;
