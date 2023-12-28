import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import OverviewCards from "./OverviewCards";
import Pictures from "./Pictures";
import Menu from "./Menu";
import TimingHours from "./TimingHours";
import Reviews from "./Reviews";
import Loader from "@/components/Loader";


const RestrauntDetail = () => {
  const [restrauntDetail, setRestrauntDetail] = useState<any>({});
  const [prevId, setPrevId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [endpoint, setEndPoint] = useState<any>();
  // const [key, setKey] = useState<any>();

  // console.log(key)

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const map_url = params.get("map_url");
    const yelp_alias = params.get("yelp_alias");

    if (yelp_alias === null) {
      setPrevId(map_url);
      // setKey("map_url");
      setEndPoint(`http://35.172.220.172/api/v1/opentable/get_restaurant_details?map_url=${map_url}`);
    } else {
      setPrevId(yelp_alias);
      // setKey("yelp_alias");
      setEndPoint(`http://35.172.220.172/api/v1/yelp/get_restaurant_details?yelp_alias=${yelp_alias}`);
    }
  }, [location.search, prevId]);

  useEffect(() => {
    const fetchData = async () => {
      if (prevId) {
        try {
          const response = await axios.get(endpoint);
          console.log("Single Restaurant Detail:", response.data);
          setRestrauntDetail(response.data);
          setLoading(false); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [endpoint, prevId]);

  return (
    <div>
       {loading ? (
      <Loader />
    ) :  (
        <>
          <section
            className="max-w-full p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div 
              style={{
                backgroundImage:
                  !restrauntDetail?.alias 
                    ? `url(${restrauntDetail?.restaurant?.photos?.profile?.large?.url})`
                    : restrauntDetail?.alias === restrauntDetail?.alias
                    ? `url(${restrauntDetail?.image_url})`
                    : "",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "95%",
                height: "500px",
                borderRadius: "10px",
                marginLeft:"30px"
              }}
            ></div>
          </section>
          <section>
            <OverviewCards restrauntDetail={restrauntDetail} />
          </section>
          <section>
            <Pictures restrauntDetail={restrauntDetail} />
          </section>
          {
            restrauntDetail?.alias 
            ? null
            :
          <section>
            <Menu restrauntDetail={restrauntDetail} />
          </section>
          }
          <section>
            <TimingHours restrauntDetail={restrauntDetail} />
          </section>
          <section>
            <Reviews restrauntDetail={restrauntDetail} />
          </section>
        </>
       )} 
    </div>
  );
};

export default RestrauntDetail;
