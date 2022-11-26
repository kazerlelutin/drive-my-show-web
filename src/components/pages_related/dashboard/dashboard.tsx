import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Card } from '~/components/ui/card/card'
import { Flex } from '~/components/ui/flex/flex'
import styles from './dashboard.css?inline'
import { Col } from '../../ui/col/col'

export const Dashboard = component$(() => {
  useStylesScoped$(styles)

  return (
    <Flex>
      <Col>
        <Card title="Mes dernieres emissions">
          <p>Les emissions, contenant des fils</p>
        </Card>
        <Card title="Mes derniers fils">
          <p>ici mes derniers fils, contenant des chroniques</p>
        </Card>
      </Col>
      <Col>
        <Card title="Mes dernieres chroniques">
          <p>Les chroniques écrits, provenant de n'importe quel fil</p>
          <p>contenant des medias</p>
        </Card>

        <Card title="Mes chaines" type="info">
          <p>Listes des chaines twitch</p>
        </Card>
      </Col>
    </Flex>
  )
})
