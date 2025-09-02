import { imageData } from '@utils/dummyData';
import { screenWidth } from '@utils/Scaling';
import React, { FC, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AutoScrolling from 'react-native-auto-scrolling';

const ProductSlider = () => {
    const rows = useMemo(() => {
        const result = []
        for (let i = 0; i < imageData.length; i += 4) {
            result.push(imageData.slice(i, i + 4))
        }
        return result
    }, [])

    return (
        <View pointerEvents='none'>
            <AutoScrolling duration={10000} style={styles.autoScroll}>
                <View style={styles.gridContainer}>
                    {rows?.map((row: any, rowIndex: number) => {
                        return (
                            <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
                        )
                    })}
                </View>
            </AutoScrolling>
        </View>
    )
}

const Row: FC<{ row: typeof imageData; rowIndex: number }> = ({ row, rowIndex }) => {
    return (
        <View style={styles.row}>
            {row?.map((image, imageIndex) => {
                const horizontalShift = rowIndex % 2 === 0 ? -18 : 18
                return (
                    <View key={imageIndex} style={[styles.itemContainer, {
                        transform: [{ translateX: horizontalShift }]
                    }]} >
                        <Image source={image} style={styles.image} />
                    </View>
                )
            })}
        </View>
    )
}

const MemoizedRow = React.memo(Row);

const styles = StyleSheet.create({
    autoScroll: {
        position: 'absolute',
        zIndex: -2
    },
    gridContainer: {
        justifyContent: 'center',
        overflow: 'visible',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    itemContainer: {
        marginBottom: 12,
        marginHorizontal: 10,
        width: screenWidth * 0.26,
        height: screenWidth * 0.26,
        borderRadius: 25,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductSlider
