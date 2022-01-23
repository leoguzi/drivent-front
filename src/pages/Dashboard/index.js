import { useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import styled from "styled-components";

import EventInfoContext from "../../contexts/EventInfoContext";

import NavigationBar from "../../components/Dashboard/NavigationBar";

import DashboardLayout from "../../layouts/Dashboard";
import FillSubscription from "./FillSubscription";
import Payment from "./Payment";
import Hotel from "./Hotel";
import Activities from "./Activities";
import Certificate from "./Certificate";

export default function Dashboard() {
  const { eventInfo } = useContext(EventInfoContext);
  const match = useRouteMatch();

  return (
    <DashboardLayout background={eventInfo.backgroundImage}>
      <NavigationBar />

      <Container>
        <Switch>
          <Route path={`${match.path}/subscription`} exact>
            <FillSubscription />
          </Route>

          <Route path={`${match.path}/payment`} exact>
            <Payment />
          </Route>

          <Route path={`${match.path}/hotel`} exact>
            <Hotel />
          </Route>

          <Route path={`${match.path}/activities`} exact>
            <Activities />
          </Route>

          <Route path={`${match.path}/certificate`} exact>
            <Certificate />
          </Route>

          <Route path={`${match.path}/`}>
            <Redirect to={`${match.url}/subscription`} />
          </Route>
        </Switch>
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  min-height: 100%;
  width: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 1rem; 
    }

    ::-webkit-scrollbar-thumb {
        background: #b9b9b9;
        border-radius: 1rem; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
