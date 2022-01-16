import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>❤</PanelHeader>
    {fetchedUser && (
      <Group>
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}

    <Group>
      <Div>
        <Button
          stretched
          size="l"
          mode="secondary"
          onClick={go}
          data-to="persik"
        >
          Получить Алмазы💎(будет показана реклама) 
        </Button>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
