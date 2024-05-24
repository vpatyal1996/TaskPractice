import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

const initialData = [
  { key: 'item-1', label: 'Item 1', backgroundColor: '#ff6347' },
  { key: 'item-2', label: 'Item 2', backgroundColor: '#4682b4' },
  { key: 'item-3', label: 'Item 3', backgroundColor: '#3cb371' },
  { key: 'item-4', label: 'Item 4', backgroundColor: '#ffa500' },
  { key: 'item-5', label: 'Item 5', backgroundColor: '#9370db' }
];

export default function Draggable() {
  const [data, setData] = useState(initialData);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "red" : item.backgroundColor },
          ]}
        >
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
