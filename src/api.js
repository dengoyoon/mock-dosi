const getUser = async () => {
  const response = await fetch("/user");
  return response.json();
};

const getAdventureNFTs = async () => {
  const response = await fetch("/adventure-nfts");
  return response.json();
};

const getWeeklyDosiInfo = async () => {
  const response = await fetch("/weekly-dosi-info");
  return response.json();
};

export { getUser, getAdventureNFTs, getWeeklyDosiInfo };
