import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Badge } from "react-native-paper";
import { width } from "../../Dimens";

export default function StatCards({
  totalSales,
  totalRevenue,
  revenue,
  totalOrders,
  active,
  campaignDue,
  cancel,
  complete,
  notstarted,
  rejected,
  commission,
  newUser,
  repeatedUser,
  cartconversion,
  menuvisits,
  visits,
  addOnCounts,
  addOnRevenue,
}) {
  const [addOnCommission, setAddCommission] = useState(0);
  const [totalCommission, setTotalCommission] = useState(0);
  const [salesCommission, setSalesCommission] = useState(0);

  const calculateCommission = () => {
    let x = 0;
    let y = (parseFloat(totalRevenue) * parseFloat(commission)) / 100;
    setAddCommission(x);
    setSalesCommission(y);
    setTotalCommission(x + y);
  };

  useEffect(() => {
    calculateCommission()
  }, [totalRevenue, commission]);

  return (
    <ScrollView horizontal>
      <View>
        <View
          style={[
            styles.stat_card,
            { width: width - 6, justifyContent: "flex-start" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.stat_head}>
                Sales
                <Text style={styles.stat_label}>
                  {" "}
                  (Revenue + Delivery - Discount)
                </Text>
              </Text>
            </View>
            <View>
              <Badge style={{ backgroundColor: "#ff6600", color: "#fff", fontWeight: "bold" }} >
                {" "}
                {parseInt(complete) +
                  parseInt(active) +
                  parseInt(cancel) +
                  parseInt(notstarted)}{" "}
                orders
              </Badge>
            </View>
          </View>
          <View>
            <Text style={styles.stat_value}>${parseFloat(totalSales).toFixed(2)}</Text>
          </View>
          <View>
            <View style={{ height: 20 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                minHeight: 30,
                marginTop: 16,
              }}
            >
              <Text style={styles.stat_label}>Plan</Text>
              <Text style={styles.stat_label}>Revenue</Text>
              <Text style={styles.stat_label}>Delivery</Text>
              <Text style={styles.stat_label}>Discount</Text>
            </View>
            {
              revenue.map((item, key) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 30,
                    padding: 2,
                    borderRadius: 1,
                    paddingHorizontal: 8,
                    marginVertical: 4,
                    borderWidth: 0.2,
                    alignItems: "center",
                  }}
                  key={key}
                >
                  <Text style={styles.stat_label}>{item.plan_name}</Text>
                  <Text style={styles.stat_label}>${parseFloat(item.revenue).toFixed(2) || 0}</Text>
                  <Text style={styles.stat_label}>${parseFloat(item.delivery_fee).toFixed(2) || 0}</Text>
                  <Text style={styles.stat_label}>${parseFloat(item.discount).toFixed(2) || 0}</Text>
                </View>
              ))
            }
          </View>
        </View>
        {/* Sales */}
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <View style={[styles.stat_card, { width: width / 3 }]}>
            <Text style={styles.stat_head}>Adons Revenue</Text>
            <Text style={styles.stat_value}>
              ${parseFloat(addOnRevenue).toFixed(2) || 0}
            </Text>
            <Text style={styles.stat_label}>on {addOnCounts || 0} ad-ons</Text>
          </View>
          {/* Ads Campaign */}
          <View style={[styles.stat_card, { width: width / 3.1 }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.stat_head}>Commission</Text>
              <Text
                style={[styles.stat_label, { fontSize: 8, marginBottom: 0 }]}
              >
                ({commission}%)
              </Text>
            </View>
            <Text style={styles.stat_value}>
              ${parseFloat(totalCommission).toFixed(2)}
            </Text>
            <View style={{ marginVertical: 4, paddingVertical: 4 }} />
            <Text style={styles.stat_label}>
              Revenue: ${parseFloat(salesCommission).toFixed(2)}
            </Text>
            <Text style={styles.stat_label}>
              Ad Ons: ${parseFloat(addOnCommission).toFixed(2)}
            </Text>
          </View>
          {/* Commission */}

          <View style={[styles.stat_card, { width: width / 3.1 }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.stat_head}>Orders</Text>
              <View>
                <Badge style={{ backgroundColor: "#ff6600", color: "#fff", fontWeight: "bold" }}>
                  {totalOrders}
                </Badge>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.stat_label}>Accepted</Text>
              <Text style={[styles.stat_value, { color: "#ffc300" }]}>
                {notstarted}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.stat_label}>In Progress</Text>
              <Text style={[styles.stat_value, { color: "#f5a617" }]}>
                {active}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.stat_label}>Completed</Text>
              <Text style={[styles.stat_value, { color: "#22cf6c" }]}>
                {complete}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.stat_label}>Cancelled</Text>
              <Text style={[styles.stat_value, { color: "red" }]}>
                {cancel}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.stat_label}>Rejected</Text>
              <Text style={[styles.stat_value, { color: "#777" }]}>
                {rejected}
              </Text>
            </View>
          </View>
          {/* Orders */}
        </View>
      </View>

      <View>
        <View style={[styles.stat_card, { width: width - 12 }]}>
          <Text style={styles.stat_head}>Menu visits to orders conversion</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.stat_label}>Menu Visits</Text>
              <Text style={styles.stat_value}>{menuvisits}</Text>
            </View>
            <View>
              <Text style={styles.stat_label}>Visits to Cart</Text>
              <Text style={styles.stat_value}>{visits}</Text>
            </View>
            <View>
              <Text style={styles.stat_label}>Cart to Orders</Text>
              <Text style={styles.stat_value}>{cartconversion}</Text>
            </View>
          </View>
        </View>
        {/* Cart statistics  */}

        <View style={{ flexDirection: "row" }}>
          <View style={[styles.stat_card, { width: 3.1 }]}>
            <Text style={styles.stat_head}>Ads Campaign</Text>
            <Text style={styles.stat_value}>
              Due: ${parseFloat(campaignDue).toFixed(2)}
            </Text>
            <Text style={styles.stat_label}>Paid: $0</Text>
          </View>
          <View style={[styles.stat_card, { width: 3.1 }]}>
            <Text style={styles.stat_head}>New Users</Text>
            <Text style={[styles.stat_value, { color: '#000' }]}>{newUser || 0}</Text>
          </View>
          {/* New users */}

          <View style={[styles.stat_card, { width: 3.1 }]}>
            <Text style={styles.stat_head}>Repeat Users</Text>
            <Text style={[styles.stat_value, { color: '#000' }]}>{repeatedUser || 0}</Text>
          </View>
          {/* Repeat Users */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stat_card: {
    backgroundColor: "white",
    width: width / 2.1,
    flexGrow: 1,
    minHeight: 120,
    borderRadius: 8,
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 8,
  },
  stat_head: {
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 4,
    textAlign: "justify",
  },
  stat_label: {
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 2,
    paddingVertical: 0,
    textAlign: "justify",
    color: "#000",
  },
  stat_value: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "justify",
  },
});
