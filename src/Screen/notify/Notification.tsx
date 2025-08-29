import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import NotificationCard from '../../components/NotificationCard';

const notifications = [
  { id: '1', name: 'Sarah Johnson', action: 'liked your post', time: '1 hr' },
  {
    id: '2',
    name: 'Mike Chen',
    action: 'commented on your photo',
    time: '2 hr',
  },
  {
    id: '3',
    name: 'Emily Carter',
    action: 'started following you',
    time: '3 hr',
  },
  {
    id: '4',
    name: 'Michael Brown',
    action: 'mentioned you in a comment',
    time: '5 hr',
  },
  { id: '5', name: 'Jessica Lee', action: 'shared your post', time: '7 hr' },
  {
    id: '6',
    name: 'Daniel Wilson',
    action: 'reacted to your story',
    time: '8 hr',
  },
  {
    id: '7',
    name: 'Olivia Taylor',
    action: 'liked your comment',
    time: '10 hr',
  },
  {
    id: '8',
    name: 'James Miller',
    action: 'sent you a message',
    time: '12 hr',
  },
  {
    id: '9',
    name: 'Sophia Anderson',
    action: 'tagged you in a post',
    time: 'Yesterday',
  },
  {
    id: '10',
    name: 'William Thomas',
    action: 'liked your reel',
    time: 'Yesterday',
  },
  {
    id: '11',
    name: 'Isabella Martinez',
    action: 'commented on your post',
    time: '2 days ago',
  },
  {
    id: '12',
    name: 'Liam Rodriguez',
    action: 'followed you',
    time: '3 days ago',
  },
];

const Notification: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Notifications" />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            avatar={''}
            name={item.name}
            action={item.action}
            time={item.time}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
