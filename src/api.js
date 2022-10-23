const getUser = async () => {
  const res = await fetch("/user").then((res) => {
    return res.json();
  });
};

const getAdventureNFTs = async () => {
  const response = await fetch("/adventure-nfts");
  return response.json();
};

const getWeeklyAccumulateCount = async () => {
  const res = await fetch("/weekly-accumulate-count").then((res) => {
    return res.json();
  });
};

export { getUser, getAdventureNFTs, getWeeklyAccumulateCount };
