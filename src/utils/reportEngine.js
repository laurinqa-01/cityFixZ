const SUPABASE_URL = "https://vlyzkouuqlsjbvdcvbhj.supabase.co";
const SUPABASE_KEY = "sb_publishable_tWVRQvN6AhGCexc-YnoeIw_jr_h2HNx";

async function getReports() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reports?select=*`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

module.exports = { getReports };