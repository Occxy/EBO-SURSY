<?php
# src/Entity/Site.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Site
 *
 * @ORM\Table(name="site", indexes={@ORM\Index(name="SiteName", columns={"SiteName"})})
 * @ORM\Entity
 */
class Site
{
    /**
     * @var integer
     *
     * @ORM\Column(name="N", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $n;

    /**
     * @var string
     *
     * @ORM\Column(name="SiteName", type="string", length=255, nullable=true)
     */
    private $sitename;

    /**
     * @var string
     *
     * @ORM\Column(name="SiteDescription", type="string", length=255, nullable=true)
     */
    private $sitedescription;

    /**
     * @var integer
     *
     * @ORM\Column(name="GPSXUTM", type="integer", nullable=true)
     */
    private $gpsxutm;

    /**
     * @var integer
     *
     * @ORM\Column(name="GPSYUTM", type="integer", nullable=true)
     */
    private $gpsyutm;

    /**
     * @var integer
     *
     * @ORM\Column(name="Altitude", type="integer", nullable=true)
     */
    private $altitude;

    /**
     * @var string
     *
     * @ORM\Column(name="Country", type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(name="Province", type="string", length=255, nullable=true)
     */
    private $province;



    /**
     * Get n
     *
     * @return integer
     */
    public function getN()
    {
        return $this->n;
    }

    /**
     * Set sitename
     *
     * @param string $sitename
     *
     * @return Site
     */
    public function setSitename($sitename)
    {
        $this->sitename = $sitename;

        return $this;
    }

    /**
     * Get sitename
     *
     * @return string
     */
    public function getSitename()
    {
        return $this->sitename;
    }

    /**
     * Set sitedescription
     *
     * @param string $sitedescription
     *
     * @return Site
     */
    public function setSitedescription($sitedescription)
    {
        $this->sitedescription = $sitedescription;

        return $this;
    }

    /**
     * Get sitedescription
     *
     * @return string
     */
    public function getSitedescription()
    {
        return $this->sitedescription;
    }

    /**
     * Set gpsxutm
     *
     * @param integer $gpsxutm
     *
     * @return Site
     */
    public function setGpsxutm($gpsxutm)
    {
        $this->gpsxutm = $gpsxutm;

        return $this;
    }

    /**
     * Get gpsxutm
     *
     * @return integer
     */
    public function getGpsxutm()
    {
        return $this->gpsxutm;
    }

    /**
     * Set gpsyutm
     *
     * @param integer $gpsyutm
     *
     * @return Site
     */
    public function setGpsyutm($gpsyutm)
    {
        $this->gpsyutm = $gpsyutm;

        return $this;
    }

    /**
     * Get gpsyutm
     *
     * @return integer
     */
    public function getGpsyutm()
    {
        return $this->gpsyutm;
    }

    /**
     * Set altitude
     *
     * @param integer $altitude
     *
     * @return Site
     */
    public function setAltitude($altitude)
    {
        $this->altitude = $altitude;

        return $this;
    }

    /**
     * Get altitude
     *
     * @return integer
     */
    public function getAltitude()
    {
        return $this->altitude;
    }

    /**
     * Set country
     *
     * @param string $country
     *
     * @return Site
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set province
     *
     * @param string $province
     *
     * @return Site
     */
    public function setProvince($province)
    {
        $this->province = $province;

        return $this;
    }

    /**
     * Get province
     *
     * @return string
     */
    public function getProvince()
    {
        return $this->province;
    }
}
