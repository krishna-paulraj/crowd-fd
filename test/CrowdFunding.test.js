const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CrowdFunding", function () {
  let CrowdFunding, crowdFunding, owner, addr1, addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    CrowdFunding = await ethers.getContractFactory("CrowdFunding");
    [owner, addr1, addr2] = await ethers.getSigners();

    // To deploy the contract, we call deploy() and wait for the contract to be deployed.
    crowdFunding = await CrowdFunding.deploy();
    await crowdFunding.deployed();
  });

  it("Should create a new campaign", async function () {
    const title = "Test Campaign";
    const description = "This is a test campaign";
    const target = ethers.utils.parseUnits("1", "ether");
    const deadline =
      (await ethers.provider.getBlock("latest")).timestamp + 86400; // 1 day from now
    const image = "image_url";

    await crowdFunding.createCampaign(
      owner.address,
      title,
      description,
      target,
      deadline,
      image,
    );

    const campaign = await crowdFunding.campaigns(0);
    expect(campaign.owner).to.equal(owner.address);
    expect(campaign.title).to.equal(title);
    expect(campaign.description).to.equal(description);
    expect(campaign.target).to.equal(target);
    expect(campaign.deadline).to.equal(deadline);
    expect(campaign.image).to.equal(image);
  });

  it("Should donate to a campaign", async function () {
    const title = "Test Campaign";
    const description = "This is a test campaign";
    const target = ethers.utils.parseUnits("1", "ether");
    const deadline =
      (await ethers.provider.getBlock("latest")).timestamp + 86400; // 1 day from now
    const image = "image_url";

    await crowdFunding.createCampaign(
      owner.address,
      title,
      description,
      target,
      deadline,
      image,
    );

    await crowdFunding
      .connect(addr1)
      .donateToCampaign(0, { value: ethers.utils.parseUnits("0.5", "ether") });

    const campaign = await crowdFunding.campaigns(0);
    expect(campaign.amountCollected).to.equal(
      ethers.utils.parseUnits("0.5", "ether"),
    );

    const [donators, donations] = await crowdFunding.getDonators(0);
    expect(donators[0]).to.equal(addr1.address);
    expect(donations[0]).to.equal(ethers.utils.parseUnits("0.5", "ether"));
  });

  it("Should return all campaigns", async function () {
    const title = "Test Campaign";
    const description = "This is a test campaign";
    const target = ethers.utils.parseUnits("1", "ether");
    const deadline =
      (await ethers.provider.getBlock("latest")).timestamp + 86400; // 1 day from now
    const image = "image_url";

    await crowdFunding.createCampaign(
      owner.address,
      title,
      description,
      target,
      deadline,
      image,
    );
    await crowdFunding.createCampaign(
      addr1.address,
      "Second Campaign",
      "Another test campaign",
      target,
      deadline,
      image,
    );

    const campaigns = await crowdFunding.getCampaigns();
    expect(campaigns.length).to.equal(2);
    expect(campaigns[0].title).to.equal(title);
    expect(campaigns[1].title).to.equal("Second Campaign");
  });
});
