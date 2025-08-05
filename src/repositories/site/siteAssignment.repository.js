import SiteAssignments from "../../models/SiteAssignments.js";

class SiteAssignmentRepository {
  async hasSiteAssignment(userId) {
    const mapping = await SiteAssignments.findOne({ userId });
    if (mapping) {
      return true;
    }
    return false;
  }

  async addNewSiteAssignment(siteId, userId) {
    return await SiteAssignments.findOneAndUpdate(
      { userId },
      { $addToSet: { assignedSites: siteId } },
      { new: true }
    );
  }

  async createNewSiteAssignment(newSiteAssignment){
    return await newSiteAssignment.save()
  }
}

export default new SiteAssignmentRepository();
