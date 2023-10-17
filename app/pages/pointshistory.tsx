import React from 'react'
import { Text, View } from 'react-native';
import colors from '../../styles/theme';
import { ScrollView } from 'react-native';

interface History {
  id: number;
  date1: string;
  date2: string;
  title: string;
  type: string;
  points: string;
  positive?: boolean;
}

export default function PointsHistory() {
  const historyData: History[] = [
    {
      id: 1,
      date1: '03rd',
      date2: 'JAN 2018',
      title: 'Sarova Stanley',
      type: 'Accomodation',
      points: '-3000',
    },
    {
      id: 2,
      date1: '03rd',
      date2: 'JAN 2018',
      title: 'Sarova Panafric',
      type: 'F & B Lunch at Thorn Tree',
      points: '200',
      positive: true,
    },
    {
      id: 3,
      date1: '11th',
      date2: 'NAR 2018',
      title: 'Sarova Stanley',
      type: 'Spa Treatment',
      points: '300',
      positive: true,
    },
    {
      id: 4,
      date1: '13th',
      date2: 'MAR 2018',
      title: 'Sarova Maasai Mara',
      type: 'Redeemed for Spa Treatment',
      points: '-300',
    },

    {
      id: 5,
      date1: '13th',
      date2: 'MAR 2018',
      title: 'Sarova Maasai Mara',
      type: 'Redeemed Accommodation',
      points: '-2000',
    },
    {
      id: 6,
      date1: '11th',
      date2: 'NAR 2018',
      title: 'Sarova Stanley',
      type: 'Spa Treatment',
      points: '300',
      positive: true,
    },
  ]
  const History = ({ date1, date2, title, type, points, positive }: History) =>{
    return (
      <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            borderTopWidth: .5, 
            borderTopColor: colors?.lightGray3,
            paddingVertical: 15,
          }}
        >
        <View style={{ justifyContent: 'flex-end' }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{date1}</Text>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{date2}</Text>
        </View>
        <View style={{ alignItems: 'flex-start', width: 170, paddingLeft: 6 }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 17 }}>{title}</Text>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{type}</Text>
        </View>
        <View>
           <Text style={{ color: positive ? colors?.shadeGreen : colors?.bgRed, fontSize: 15 }}>{points}</Text>
          <Text style={{ color:  positive ? colors?.shadeGreen : colors?.bgRed }}>Points</Text>
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ width: '100%', paddingHorizontal: 0, paddingTop: 5, paddingBottom: 260 }}>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: colors?.mediumGray }}>You only need 2,000 more points to become a <Text style={{ fontWeight: 'bold' }}>Diamond</Text> member</Text>
        </View>
        <View style={{ width: '100%' }}>
          {historyData?.map(history => (
            <History 
              key={history?.id}
              id={history?.id}
              date1={history?.date1}
              date2={history?.date2}
              title={history?.title}
              type={history?.type}
              positive={history?.positive}
              points={history?.points}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
