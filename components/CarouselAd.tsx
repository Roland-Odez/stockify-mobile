import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";
 
const defaultDataWith6Colors = [
	"#B0604D",
	"#899F9C",
	"#B3C680",
	"#5C6265",
];

const { width } = Dimensions.get('window');
 
function CarouselAd({ RenderItem }: {RenderItem: CarouselRenderItem<string>}) {
    const scrollOffsetValue = useSharedValue<number>(0);
	const [indicators, setIndicators] = useState<boolean[] | []>([])

	useEffect(() => {
	  setIndicators(
		defaultDataWith6Colors.map((_, i) => i === 0 ? true : false)
	  )
	}, [])
	
 
	return (
		<View
			id="carousel-component"
            accessibilityLabel="basic-layouts-parallax"
		>
			<Carousel
				testID={"xxx"}
				loop={true}
				width={width}
				height={410}
				snapEnabled={false}
				pagingEnabled={true}
				autoPlayInterval={2000}
				data={defaultDataWith6Colors}
				defaultScrollOffsetValue={scrollOffsetValue}
				style={{ 
                    width: 'auto',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                 }}
				onScrollStart={() => {
					console.log("Scroll start");
				}}
				onScrollEnd={() => {
					console.log("Scroll end");
				}}
				onConfigurePanGesture={(g: { enabled: (arg0: boolean) => any }) => {
					"worklet";
					g.enabled(false);
				}}
				onSnapToItem={(index: number) => {
					let indicators = defaultDataWith6Colors.map(() => false)
					indicators[index] = true
					setIndicators(indicators)
				}}
				renderItem={(d) => <RenderItem {...d} />}
			/>

			<View className="my-3 flex-row items-center justify-center gap-2">
				{indicators.map((i, id) => (
					<View key={`indicator-${id}`}  className="w-2.5 h-2.5 inline-block rounded-full" style={{backgroundColor: i ? 'white': '#ffffff58'}} />
				))}
			</View>

		</View>
	);
}
 
export default CarouselAd;
 