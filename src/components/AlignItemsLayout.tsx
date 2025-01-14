import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PreviewLayoutProps, styles } from '../style';

const AlignItemsLayout = () => {
    const [alignItems, setAlignItems] = useState('stretch');

    return (
        <PreviewLayout
            label="alignItems"
            values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
            selectedValue={alignItems}
            setSelectedValue={setAlignItems}
        >
            <View
                style={[
                    styles.alignBox,
                    { backgroundColor: 'powderblue', width: 300 },
                ]}
            />
            <View style={[styles.alignBox, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.alignBox, { backgroundColor: 'steelblue' }]} />
        </PreviewLayout>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}: PreviewLayoutProps) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map(value => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View
            style={[
                styles.container,
                { [label]: selectedValue },
                // { flexDirection: 'row' },
            ]}
        >
            {children}
        </View>
    </View>
);

export default AlignItemsLayout;
