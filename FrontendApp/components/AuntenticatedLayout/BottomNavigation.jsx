import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ProfileRoute = () => <Text></Text>;
const ReportsRoute = () => <Text></Text>;
const ReviewRoute = () => <Text></Text>;
const DashboardRoute = () => <Text></Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Dashboard', focusedIcon: 'view-dashboard', unfocusedIcon: 'view-dashboard-outline' },
    { key: 'reports', title: 'Reportes', focusedIcon: 'file-chart', unfocusedIcon: 'file-chart-outline' },
    { key: 'review', title: 'Revisión', focusedIcon: 'check-circle', unfocusedIcon: 'check-circle-outline' },
    { key: 'profile', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    reports: ReportsRoute,
    review: ReviewRoute,
    dashboard: DashboardRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
