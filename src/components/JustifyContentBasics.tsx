import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { PreviewLayoutProps, styles } from '../style';
import { PreviewLayout } from './FlexDirectionBasics';

const JustifyContentBasics = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');

    return (
        <PreviewLayout
            label="justifyContent"
            values={[
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ]}
            selectedValue={justifyContent}
            setSelectedValue={setJustifyContent}
        >
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        </PreviewLayout>
    );
};

export default JustifyContentBasics;
