import React from 'react'
import { Card, Icon, Image, Button ,Label} from 'semantic-ui-react'
import LazyLoad from 'react-lazy-load'
const SocietyCard = ({ society }) => {
  const { name, subtitle, image, poster_url, following, site_link } = society
  return (

    <LazyLoad height={400} offsetVertical={300}>
      <Card fluid>
        <Image src={image} fluid />
        <Card.Content>
          <Card.Header>
            <a href={site_link}>{name}</a>
          </Card.Header>
          <Card.Description>
            {subtitle}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button color='blue' label={<Label basic color='blue'>{following}</Label>} icon='feed' content='follow' />
        </Card.Content>
      </Card>
    </LazyLoad>

  )
}

export default SocietyCard
